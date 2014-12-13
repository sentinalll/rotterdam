package controllers.auth;



import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import model.entity.Session;
import model.entity.User;

import java.security.Principal;

/**
 */
public class MySecurityContext implements javax.ws.rs.core.SecurityContext {

    private final User user;
    private final Session session;//

    public MySecurityContext(Session session, User user) {
        this.session = session;
        this.user = user;
    }

    @Override
    public String getAuthenticationScheme() {
        return SecurityContext.BASIC_AUTH;
    }

    @Override
    public Principal getUserPrincipal() {
        return user;
    }

    @Override
    public boolean isSecure() {
        return null != session;
    }

    @Override
    public boolean isUserInRole(String role) {
        if (null == session) {
            // Forbidden
            Response denied = Response.status(Response.Status.FORBIDDEN).entity("Permission Denied").build();
            throw new WebApplicationException(denied);
        }

        try {
            // this user has this role?
            //return user.getRoles().contains(User.Role.valueOf(role));
            return user.getRole().getName().equals(role);
        } catch (Exception e) {
        }

        return false;
    }
}
