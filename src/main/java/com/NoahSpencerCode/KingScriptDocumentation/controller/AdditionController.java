package com.NoahSpencerCode.KingScriptDocumentation.controller;

import  com.NoahSpencerCode.KingScriptDocumentation.model.Addition;
import com.NoahSpencerCode.KingScriptDocumentation.service.AdditionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addition")
public class AdditionController {
    @Autowired
    private AdditionService additionService;

    @PostMapping("/add")
    public String add(@RequestBody Addition addition){
        additionService.saveAddition(addition);
        return "New addition is added";
    }

    @GetMapping("/getAll")
    public List<Addition> getAllAdditions(){
        return additionService.getAllAdditions();
    }
}
