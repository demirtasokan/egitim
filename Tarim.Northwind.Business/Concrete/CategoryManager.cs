using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tarim.Northwind.Business.Abstract;
using Tarim.Northwind.DataAccess.Abstract;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.Business.Concrete
{
   public class CategoryManager : ICategoryService
    {

        private ICategoryDal _categoryDal;

        public CategoryManager(ICategoryDal categoryDal)
        {
            _categoryDal = categoryDal;
        }

        public List<Category> GetList()
        {
            return _categoryDal.GetList().ToList();
        }
    }
}
