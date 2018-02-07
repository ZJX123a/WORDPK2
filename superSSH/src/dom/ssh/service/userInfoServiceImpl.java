package dom.ssh.service;
import dom.ssh.modle.userInfo;
import dom.ssh.dao.UserDao;
import dom.ssh.dao.userInfoDao;
public class userInfoServiceImpl implements userInfoService{

	private userInfoDao uid;

	public void setUserInfoS(userInfo userInfo) {
		 this.uid.setUserInfoD(userInfo);
	}
	
	public void setUserInfoDao(userInfoDao uid) {
		this.uid = uid;
	}
}
