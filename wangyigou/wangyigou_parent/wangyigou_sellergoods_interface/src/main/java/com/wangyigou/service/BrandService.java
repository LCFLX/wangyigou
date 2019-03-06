package com.wangyigou.service;

import com.wangyigou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;


public interface BrandService {

    public PageResult<TbBrand> findpage(int pageNum,int pageSize);

    List<TbBrand> findAll();
}
