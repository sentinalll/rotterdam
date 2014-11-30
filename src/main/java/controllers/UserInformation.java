package controllers;

import controllers.auth.CookieUtil;
import model.entity.User;
import model.entity.UserRole;
import org.json.JSONException;
import org.json.JSONObject;
import tools.EmailSender;
import tools.Factory;
import tools.SecuritySettings;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by Anatolii Syvashchenko on 30.11.14.
 */
@Path("/")
@PermitAll
public class UserInformation {

    @POST
    @Path("/home")
    @Consumes({ MediaType.APPLICATION_JSON })
    public Response restorePassword(@Context HttpServletRequest hsr ) throws JSONException{
        CookieUtil cookieUtil = new CookieUtil();
//        User user = Factory
//                .getInstance()
//                .getSessionDAO()
//                .selectBySessionId(cookieUtil.getSessionIdFromRequest(hsr))
//                .getUser();
        User user = new User();
        user.setEmail("23");
        user.setFirstname("wsds");
        user.setId(123);
        UserRole ur = new UserRole();
        ur.setIdUserRole(3);
        ur.setName("Driver");
        user.setRole(ur);
        user.setPassword("hghg");
        user.setSurname("hjhjj");
        user.setZipcode("ghjg7");
        System.out.println("!!!");
        System.out.println(user);
        if (user != null){
            System.out.println("in if");
            return Response.ok(user).build();
        } else {
            return Response.status(401).build();
        }
    }

}
