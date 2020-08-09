import errors from './errors'
import success from './success'
import validators from './validators'

//PORT LISTENING SERVER
process.env.PORT = process.env.PORT || 3000

//Server
process.env.PRODUCTION = false

//VARIABLES DATABASE
process.env.DB_HOST = process.env.DB_HOST || "ec2-3-215-83-17.compute-1.amazonaws.com"
process.env.DB_DATABASE = process.env.DB_DATABASE || "dcimmbvpbod4kj"
process.env.DB_USERNAME = process.env.DB_USERNAME || "bxrikxyhhmyfve"
process.env.DB_PASSWORD = process.env.DB_PASSWORD || "64ae17519324720698ededc2ea7cdd0a43674b9717d4666928491e987bb46304"
process.env.DB_DIALECT = process.env.DB_DIALECT || "postgres"

//DATA ADMIN
process.env.ADMIN_ROLE = "admin"
process.env.ADMIN_NAME = "Juan Pablo"
process.env.ADMIN_LASTNAME = "Camargo Lasso"
process.env.ADMIN_PASSWORD = "1234Juan"
process.env.NICKNAME = "juancholasso"
process.env.ADMIN_EMAIL = "jpcamargol@unbosque.edu.co"
process.env.ADMIN_TELEPHONE = "3223737426"
process.env.ADMIN_IDDOCUMENT = "1233691706"
process.env.ADMIN_IDUSER = 1
process.env.ADMIN_IDROL = 1

//VARIABLES MAIL
process.env.MAIL_SERVICE = process.env.MAIL_SERVICE || "gmail"
process.env.MAIL_USER = process.env.MAIL_USER || "example@gmail.com"
process.env.MAIL_PASSWORD = process.env.MAIL_PASSWORD || "passexample"

//JWT
process.env.SEED = process.env.SEED || "r27-@B_tQ6C+dx2MpsTP$F8*k+3J+Q"
process.env.EXPIRESIN = process.env.EXPIRESIN || 600