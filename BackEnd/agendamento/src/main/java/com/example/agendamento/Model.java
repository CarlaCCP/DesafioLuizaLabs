package com.example.agendamento;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="tb_agendamento")
public class Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column
	@NotNull
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataHora = new java.sql.Date(System.currentTimeMillis());; 
	
	@Column
	@NotNull
	private String destinatario;
	
	@Column
	@NotNull
	private String mensagem;

	@Column
	private String status;
	
	
	//Encapsulamento de dados
	public Long getId() {
		return id;
	}
	
	

	public String getDestinatario() {
		return destinatario;
	}

	public void setDestinatario(String destinatario) {
		this.destinatario = destinatario;
	}
	
	
	
	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	
	
	
	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		String texto = "Aguardando envio"; 
		this.status = texto;

	}



	public Date getDataHora() {
		return dataHora;
	}



	public void setDataHora(Date dataHora) {
		this.dataHora = dataHora;
	}
	
	
}
