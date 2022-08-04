package com.onload.teste.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onload.teste.models.MateriaPrima;
import com.onload.teste.repository.MateriaPrimaRepository;

@Service
public class MateriaPrimaService {

    @Autowired
    private MateriaPrimaRepository repo;

    public List<MateriaPrima> findAll(){
        return repo.findAll();
    }

    public Optional<MateriaPrima> findById(Long id){
        Optional<MateriaPrima> find = repo.findById(id);
        return find;
    }

    public MateriaPrima save(MateriaPrima materiaprima){
        return repo.save(materiaprima);
    }

    public MateriaPrima update(Long id, MateriaPrima materiaprima){
        Optional<MateriaPrima> find = repo.findById(id);
        if (find.isEmpty()) {
            return null;
        } else {
            find.get().setName(materiaprima.getName());
            find.get().setInventory(materiaprima.getInventory());
            return repo.save(find.get());
        }
    }

    public MateriaPrima delete(Long id){
        Optional<MateriaPrima> find = repo.findById(id);
        repo.delete(find.get());
        return find.get();    
    }
    
}
