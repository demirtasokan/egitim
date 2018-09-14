using System;
using System.Collections.Generic;
using System.Text;
using Tarim.Core.DataAccess;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.DataAccess.Abstract
{
  public  interface ICategoryDal:IEntityRepository<Category>
    {
    }
}
