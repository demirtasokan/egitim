using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tarim.Northwind.Business.Abstract;
using Tarim.Northwind.DataAccess.Abstract;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.Business.Concrete
{
    public class ProductManager:IProductService
    {
        private IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public List<Product> GetList()
        {
            return _productDal.GetList().ToList();
        }

        public List<Product> GetByCategory(int categoryId)
        {
            return _productDal.GetList(p => p.CategoryId == categoryId).ToList();
        }

        public void Add(Product product)
        {
            _productDal.Add(product);
        }
    }
}
