/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.onload.teste.controller;

import com.onload.teste.models.Produto;
import com.onload.teste.repository.ProdutoRepository;
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
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repo;
    
    
    @GetMapping("/")
    public ResponseEntity<List<Produto>> findaAll() {
        return ResponseEntity.ok(repo.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> findById(@PathVariable("id") Long id) {
        Optional<Produto> find = repo.findById(id);
        if (find.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(find.get());
        }
    }

    @PostMapping("/")
    public ResponseEntity<Produto> save(@RequestBody() Produto produto) {
        var save = repo.save(produto);
        if (save.equals(null)) {
            return ResponseEntity.badRequest().build();
        } else {
            return new ResponseEntity<Produto>(save, HttpStatus.CREATED);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> update(@PathVariable("id") Long id,@RequestBody() Produto produto) {
        Optional<Produto> find = repo.findById(id);
        if (find.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            find.get().setName(produto.getName());
            find.get().setPrice(produto.getPrice());
            var res = repo.save(find.get());
            return new ResponseEntity<Produto>(res, HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Produto>> delete(@PathVariable("id") Long id) {
        Optional<Produto> find = repo.findById(id);
        if (find.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            repo.delete(find.get());
            return ResponseEntity.ok(repo.findAll());
        }
    }

}
