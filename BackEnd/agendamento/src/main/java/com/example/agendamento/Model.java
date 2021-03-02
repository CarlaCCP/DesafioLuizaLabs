package com.example.agendamento;

import java.sql.Date;

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
	private Date data;
	
	@Column
	@NotNull
	private String destinatario;
	
	@Column
	@NotNull
	private String mensagem;

	@Column
	private String status;
	
	
	public Long getId() {
		return id;
	}


	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
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
