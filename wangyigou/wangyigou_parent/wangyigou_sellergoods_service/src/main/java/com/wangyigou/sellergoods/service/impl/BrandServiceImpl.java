package com.wangyigou.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wangyigou.mapper.TbBrandMapper;
import com.wangyigou.pojo.TbBrand;
import com.wangyigou.service.BrandService;
import entity.PageResult;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class BrandServiceImpl  implements BrandService {

    @Autowired
    private TbBrandMapper brandMapper;

    @Override
    public PageResult<TbBrand> findpage(int pageNum, int pageSize) {
        PageResult<TbBrand> tbBrandPageResult = new PageResult<TbBrand>();
        PageHelper.startPage(pageNum,pageSize);
        List<TbBrand> list =  brandMapper.select(null);
        tbBrandPageResult.setRows(list);
        PageInfo<TbBrand> info = new PageInfo<TbBrand>(list);
        System.out.println(info.getTotal());
        tbBrandPageResult.setTotal(info.getTotal());
        return tbBrandPageResult;

    }

    @Override
    public List<TbBrand> findAll() {
        System.out.print(brandMapper.select(null));
        return brandMapper.select(null);
    }
}
