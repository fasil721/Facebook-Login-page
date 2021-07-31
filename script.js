$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name"
            },
            sname:{
                required:"Enter surname"
            },
            emailAddress:{
                required:'Enter email address'
            },
            password:{
                required:'Enter new password'
            },
            day:{
                required:'Select day'
            },
            month:{
                required:'Select month'
            },
            year:{
                required:'Select year'
            },
            gender:{
                required:'Select your gender'
            }
        }
    })
})