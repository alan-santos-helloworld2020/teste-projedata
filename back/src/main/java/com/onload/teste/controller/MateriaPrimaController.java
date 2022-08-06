/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.onload.teste.controller;

import com.onload.teste.models.MateriaPrima;
import com.onload.teste.service.MateriaPrimaService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alan
 */
@RestController
@RequestMapping("/materiaprima")
public class MateriaPrimaController {
    
    @Autowired
    private MateriaPrimaService service;
    
    @GetMapping("/")
    public ResponseEntity<List<MateriaPrima>> findAll(){
        
        return ResponseEntity.ok(service.findAll());
    
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<MateriaPrima> findById(@PathVariable("id") Long id) {
        Optional<MateriaPrima> find = service.findById(id);
        if (find.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            var res = service.findById(id).orElse(null);
            return ResponseEntity.ok(res);
        }
    }

    @PostMapping("/")
    public ResponseEntity<MateriaPrima> save(@RequestBody() MateriaPrima materiaprima) {
        var save = service.save(materiaprima);
        if (save.equals(null)) {
            return ResponseEntity.badRequest().build();
        } else {
            return new ResponseEntity<MateriaPrima>(save, HttpStatus.CREATED);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<MateriaPrima> update(@PathVariable("id") Long id,@RequestBody() MateriaPrima materiaprima) {
        MateriaPrima update = service.update(id,materiaprima);
        if (update.equals(null)) {
            return ResponseEntity.notFound().build();
        } else {
            return new ResponseEntity<>(update, HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<MateriaPrima>> delete(@PathVariable("id") Long id) {
        MateriaPrima find = service.delete(id);
        if (find.equals(null)) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(service.findAll());
        }
    }
}
