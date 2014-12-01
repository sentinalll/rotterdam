package model.entity;

import model.dao.inerfaces.HibernateL2Cache;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.*;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;

import java.util.ArrayList;
import java.util.List;

/**
 */
@Entity
@Table(name = "USERROLE")
public class UserRole implements HibernateL2Cache {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idUserRole;

	private String name;

	@JsonIgnore
	@OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
	private List<User> userList;

	public int getIdUserRole() {
		return idUserRole;
	}

	public void setIdUserRole(int idUserRole) {
		this.idUserRole = idUserRole;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@JsonIgnore
	public ArrayList<User> getUserList() {
		return new ArrayList<User>(userList);
	}

	@Override
	public String toString() {
		return "UserRole{" + "idUserRole" + idUserRole + ", name='" + name
				+ "'" + "}";
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		UserRole that = (UserRole) o;

		if (idUserRole != that.idUserRole)
			return false;
		if (!name.equals(that.name))
			return false;

		return true;
	}

	@Override
	public int hashCode() {
		int result = idUserRole;
		result = 31 * result + name.hashCode();
		return result;
	}
}
