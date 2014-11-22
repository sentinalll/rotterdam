package model.dao;

import java.util.List;

import model.entity.User;

public interface UserDAO {

	public User getUserByLoginAndPassword(String login, String password);

	public List<User> selectAll();

	public User selectById(int id);

	public int update(User user);

	public boolean insert(User user);

	public boolean delete(User user);

}
