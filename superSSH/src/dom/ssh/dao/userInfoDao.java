package dom.ssh.dao;
import dom.ssh.modle.*;
public interface userInfoDao {
	public void setUserInfoD(userInfo userInfo);
	public int queryUserInfoD(String weChatID);
}
