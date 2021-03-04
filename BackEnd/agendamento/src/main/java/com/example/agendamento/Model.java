package com.example.agendamento;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.validation.constraints.NotNull;

@Entity
@Table(name="tb_agendamento")
public class Model {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	@NotNull
	private String dataEnvio;
	
	@Column
	//@Temporal(TemporalType.TIMESTAMP)
	private String dataAtual; //= new java.sql.Date(System.currentTimeMillis());;
	
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
	
	
	public String getDataEnvio() {
		return dataEnvio;
	}

	public void setDataEnvio(String dataEnvio) {
		this.dataEnvio = dataEnvio;
	}
	
	

	public String getDataAtual() {
		return dataAtual;
	}

	public void setDataAtual(String dataAtual) {
		this.dataAtual = dataAtual;
	}



	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		String texto; 
		if (this.dataEnvio == this.dataAtual) {
			texto = "Enviado";
			this.status = texto;
		} else if (this.dataEnvio != this.dataAtual) {
			texto = "Aguardando envio";
			this.status = texto;
		} else {
			this.status = status;
		}
		
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
	
	
}
