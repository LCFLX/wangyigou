package com.wangyigou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.wangyigou.pojo.TbBrand;
import com.wangyigou.service.BrandService;
import entity.PageResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/brand")
public class BrandController {

    @Reference
    private BrandService brandService;

    @RequestMapping("/findPage")
    public PageResult<TbBrand> findPage( Integer page, Integer size) {
        return brandService.findpage(page, size);
    }

    @RequestMapping("/findAll")
    public List<TbBrand> findAll() {
        return brandService.findAll();
    }

}
