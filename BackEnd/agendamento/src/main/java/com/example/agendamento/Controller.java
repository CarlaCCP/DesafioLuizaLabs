package com.example.agendamento;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/agendamento")
@CrossOrigin(origins = "*" , allowedHeaders = "*")
public class Controller {

	@Autowired
	private Repository repository;
	
	@GetMapping("/todos")
	public ResponseEntity<List<Model>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
}
