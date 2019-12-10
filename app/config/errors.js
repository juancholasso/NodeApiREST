process.env.errors = JSON.stringify({
    "internal_server_error" : "Internal Server Error",
    "user_pass_invalid" : "User or password invalid",
    "service_not_found" : "Service not found",
    "health_check" : "Service ok - Health Check"
})

process.env.validators = JSON.stringify({
    "required":"The :attribute field must not be empty.",
    "email":'E-mail must be a valid email address.' 
})