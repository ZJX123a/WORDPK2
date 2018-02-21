package dom.ssh.service;


import dom.ssh.modle.userInfo;

public interface userInfoService {

	public void setUserInfoS(userInfo userInfo);
	public int queryUserInfoS(String weChatID);
}
