using Tarim.Core.DataAccess.EntityFramework;
using Tarim.Northwind.DataAccess.Abstract;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.DataAccess.Concrete.EntityFramework
{
    public class EfProductDal:
        EfEntityRepositoryBase<Product,NorthwindContext>,IProductDal
    {
    }
}
