
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const dotenv=require('dotenv')
const morgan=require('morgan')
const schema = require('./schema/schema');
const connectDB=require('./config/db')
const cors=require('cors')

// Load config
dotenv.config({ path: './config/config.env' })

// connect to db
connectDB();

const app = express();

// Logging with Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// allow cross-origin requests
app.use(cors());


// bind express with graphql
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
