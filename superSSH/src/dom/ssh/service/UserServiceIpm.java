package dom.ssh.service;

import dom.ssh.modle.Hibernate;
import dom.ssh.dao.UserDao;


public class UserServiceIpm implements UserService  {
	private UserDao userDao;
	

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	public Hibernate ServiceQueryById(int id) {
	return userDao.queryById(id);
		
	
	}
	
}


