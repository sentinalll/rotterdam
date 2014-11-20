package model.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import tools.HibernateUtil;
import model.dao.UserDAO;
import model.entity.User;

public class UserDAOImpl implements UserDAO {

	@Override
	public User getUserByLoginAndPassword(String login, String password) {
		Session session = null;
		List<User> users = null;
		try {
			session = HibernateUtil.getSession();
			users = session.createCriteria(User.class)
					.add(Restrictions.eq("email", login))
					.add(Restrictions.eq("password", password)).list();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null && session.isOpen())
				session.close();
		}
		if (users == null) {
			return null;
		} else {
			return users.get(0);
		}

	}

	@Override
	public List<User> selectAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User selectById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int update(User user) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean insert(User user) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(User user) {
		// TODO Auto-generated method stub
		return false;
	}

}
