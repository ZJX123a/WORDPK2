package dom.ssh.action;

import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Blob;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import dom.ssh.modle.Hibernate;
import dom.ssh.service.UserService;

public class UserAction extends ActionSupport {
	 private static final long serialVersionUID = 1L;
		private UserService userService;
		private double score = 1.1;
	    public void setUserService(UserService userService) {
			this.userService = userService;
		}
	protected String ID;

	public String getID() {
		return ID;
	}

	public void setID(String ID) {
		this.ID = ID;
	}
	   public String  execute() throws Exception{     
		       ActionContext context=ActionContext.getContext();     

	 HttpServletRequest request = (HttpServletRequest)context.get(ServletActionContext.HTTP_REQUEST);
	 ID=request.getParameter("id");  
	 int zzz=Integer.parseInt(ID);
	 Hibernate get;
		get = userService.ServiceQueryById(zzz);
		Blob get1=get.getPhoto();
		
		HttpServletResponse response = ServletActionContext.getResponse(); 
	
		    
		InputStream in = get1.getBinaryStream(); //转换成输入流   
		OutputStream out =response.getOutputStream();
		byte[] buff=new byte[(int)get1.length()];
		int i=0;
		while((i=in.read(buff))!=-1)
		{
			out.write(buff);
		}
		out.close();
		in.close();
		//response.setHeader("Content-Type","image/jpg");
	    //PrintWriter writer = response.getWriter();  
	    //response.getOutputStream().write(blobToBytes(get1));
	    //writer.flush();
	   // writer.print(blobToBytes(get1));  
	    //writer.flush();  
	    //writer.close();  
		return SUCCESS;
		
	   }
	   
	   public void getScore() {
		   System.out.println(score);
	   }
	
	   public void setScore(double score) {
		   this.score = score;
	   }

	   
}

     
	   
