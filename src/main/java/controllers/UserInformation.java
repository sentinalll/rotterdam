package controllers;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.json.JsonException;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.entity.User;
import tools.JsonCommands;

@Path("/")
@PermitAll
public class UserInformation {

	@RolesAllowed({ "Unpaid" })
	@POST
	@Path("/home")
	@Produces({ MediaType.APPLICATION_JSON })
	public JsonObject getInfo(@Context HttpServletRequest hsr)
			throws JsonException {
		JsonObject jsonData = JsonCommands.getUserHomeData(hsr);
		if (jsonData != null) {
			return jsonData;
		} else {
			return null;
		}
	}
}
