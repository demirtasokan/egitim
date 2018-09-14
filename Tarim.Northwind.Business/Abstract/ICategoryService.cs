using System;
using System.Collections.Generic;
using System.Text;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.Business.Abstract
{
   public interface ICategoryService
    {
        List<Category> GetList();
 
    }
}
