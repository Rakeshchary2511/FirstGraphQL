const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

const CustomerType = new GraphQLObjectType({
    name:'Customer Type',
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        age:{type:GraphQLInt},
    }
})

const RootQuery = new GraphQLObjectType({
    name:'Root Query Type',
    fields:{
        type:CustomerType,
    }
})