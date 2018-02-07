package dom.ssh.modle;

import java.io.Serializable;

import java.sql.Blob;
@SuppressWarnings("serial")
public class Hibernate implements Serializable{
private int id;

private int num;

public int getNum() {
	return num;
}
public void setNum(int num) {
	this.num = num;
}
private Blob photo;
/**
   * @return the id
   */
public Hibernate(){
}
public int getId() {
   return id;
}
/**
   * @param id the id to set
   */
public void setId(int id) {
   this.id = id;
}
/**
   * @return the name

   * @return the photo
   */
public Blob getPhoto() {
   return photo;
}
/**
   * @param photo the photo to set
   */
public void setPhoto(Blob photo) {
   this.photo = photo;
}

}
