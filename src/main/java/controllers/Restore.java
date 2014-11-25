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

import org.json.JSONObject;

@Path("/")
@PermitAll
public class Restore {

	@POST
	@Path("/restore")
	@Consumes({ MediaType.APPLICATION_JSON })
	public Response restorePassword(@Context HttpServletRequest hsr,
			@Context HttpServletResponse rspn, String data) {
		JSONObject restoreEmail = new JSONObject(data);
		System.out.println(data);
		return Response.ok().build();
	}

}
