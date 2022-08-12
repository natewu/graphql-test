import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, firebase } from "../base";

import { UserType } from "./typeDefs/userType";

const data = require("../data.json");

const RootQuery = new GraphQLObjectType({
   name: "RootQueryType",
   fields: {
      getAllUsers: {
         type: new GraphQLList(UserType),
         args: {
            // id: {type: GraphQLInt}
         },
         resolve: async (parent, args) => {
            let users: any = [];

            try{
               const res: any = await getDocs(collection(db, "users"))
               res.docs.map((doc: any) => {
                  users.push({
                     id: doc.id,
                     ...doc.data()
                  });
               });
               
               console.log(users);
               return users;

            }
            catch(error){
               console.log(error);
            }
            // return data;
         }
      },
      getUser: {
         type: UserType,
         args: {
            id: {type: GraphQLString}
         },
         resolve: async (parent, args) => {
            try{
               const res = await getDoc(doc(db, "users", args.id))
               return {
                  id: res.id,
                  ...res.data()
               }
            }
            catch(error){
               console.log(error);
            }
         }
      }
   }
});

const Mutation = new GraphQLObjectType({
   name: "Mutation",
   fields: {
      createUser: {
         type: UserType,
         args: {
            firstName: {type: GraphQLString},
            lastName: {type: GraphQLString},
            email: {type: GraphQLString},
            password: {type: GraphQLString}
         },
         resolve: async (parent, args) => {
            data.push({
               id: data.length + 1,
               firstName: args.firstName,
               lastName: args.lastName,
               email: args.email,
               password: args.password
            });
            
            try{
               const doc = await addDoc(collection(db, "users"), {
                  firstName: args.firstName,
                  lastName: args.lastName,
                  email: args.email,
                  password: args.password
               });
               console.log(doc.id);
            }
            catch(err){
               console.log(err);
            }

            return args;
         }
      },
      // updateUser,
      // deleteUser
   }
});

export = new GraphQLSchema({
   query: RootQuery,
   mutation: Mutation,
});