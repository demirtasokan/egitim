using System;
using System.Collections.Generic;
using System.Text;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.Business.Abstract
{
    public interface IProductService
    {
        List<Product> GetList();
        List<Product> GetByCategory(int categoryId);
        void Add(Product product);
    }
}
