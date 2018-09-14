using System;
using System.Collections.Generic;
using System.Text;
using Tarim.Core.DataAccess.EntityFramework;
using Tarim.Northwind.DataAccess.Abstract;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.DataAccess.Concrete.EntityFramework
{
  public  class EfCategoryDal : EfEntityRepositoryBase<Category, NorthwindContext>, ICategoryDal
    {
    }



}
