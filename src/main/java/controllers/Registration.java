package controllers;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.dao.UserDAO;
import model.dao.impl.UserDAOImpl;
import model.entity.User;

import org.json.JSONObject;


@Path("/")
@PermitAll
public class Registration {

	@POST
	@Path("/registration")
	@Consumes({ MediaType.APPLICATION_JSON })
	public Response registerNewUser(@Context HttpServletRequest hsr,
			@Context HttpServletResponse rspn,String data) {
		JSONObject registrationData = new JSONObject(data);
		User user = new User();
		user.setFirstname(registrationData.getString("login"));
		user.setEmail(registrationData.getString("email"));
		user.setPassword(registrationData.getString("pass"));
		UserDAO userDAO = new UserDAOImpl();
		userDAO.insert(user);
		return Response.ok().build();

	}

}
