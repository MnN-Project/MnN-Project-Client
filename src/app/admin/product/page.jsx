"use client";
import React from "react";
import AdminContainer from "@/components/container/AdminContainer";
import Table, {
  Action,
  Pagination,
  RenderCell,
  SearchFilters,
  TableBody,
  TableCell,
  TableColumn,
  TableContainer,
  TableHeader,
  TableRows,
  TableSortButton,
} from "@/components/ui/Table";
import Radio from "@/components/ui/Radio";
import Badge from "@/components/ui/Badge";

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "code",
    label: "CODE",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "product",
    label: "PRODUCT",
  },
  {
    key: "amount",
    label: "AMOUNT",
  },
  {
    key: "redemption",
    label: "REDEMPTION",
  },
  {
    key: "",
    label: "",
  },
];

const products = [
  {
    name: "Social Fun",
    category: "Social",
    status: "Draft",
    description: "All products",
    discount: "Up to 70%",
    quantity: 0,
  },
  {
    name: "Social Fun",
    category: "Social",
    status: "Draft",
    description: "All products",
    discount: "Up to 70%",
    quantity: 0,
  },
  {
    name: "Social Fun",
    category: "Social",
    status: "Draft",
    description: "All products",
    discount: "Up to 70%",
    quantity: 0,
  },
  {
    name: "Social Fun",
    category: "Social",
    status: "Draft",
    description: "All products",
    discount: "Up to 70%",
    quantity: 0,
  },
  {
    name: "Iphone 15",
    category: "Electronics",
    status: "Active",
    description: "Pattern Winter Sweater",
    discount: "568",
    quantity: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1719122180607-66d0c7d5c26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
];

const Product = () => {
  return (
    <AdminContainer>
      <main>
        <Table>
          {/* filters Group */}
          <SearchFilters />
          {/* end filters Group */}

          {/* Table Container */}
          <TableContainer>
            <TableHeader>
              <TableColumn className={`py-2.5 px-3`}>
                <Radio />
              </TableColumn>
              {columns.map((column, index) => (
                <TableColumn key={column.key}>
                  <div className="relative inline-flex w-full cursor-pointer">
                    <TableSortButton index={index} label={column.label} />
                  </div>
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {products.map((item, index) => (
                <TableRows key={index}>
                  <TableCell>
                    <Radio />
                  </TableCell>
                  <TableCell>
                    <RenderCell item={item.name} columnKey="text" />
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green/20 p-2 rounded-md text-green">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <RenderCell
                      item={item.status}
                      className="bg-gray/20 text-dark-gray"
                      columnKey="badge"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex items-center gap-2">
                      {item.imageUrl && (
                        <RenderCell item={item.imageUrl} columnKey="image" />
                      )}
                      <RenderCell
                        item={item.description}
                        columnKey="description"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <RenderCell item={item.discount} columnKey="text" />
                  </TableCell>
                  <TableCell>
                    <RenderCell item={item.quantity} columnKey="text" />
                  </TableCell>
                  <TableCell>
                    <Action index={index} data={products} />
                  </TableCell>
                </TableRows>
              ))}
            </TableBody>
          </TableContainer>
          {/* End Table Container */}
          {/* pagination */}
          <Pagination />
          {/* end pagination */}
        </Table>
      </main>
    </AdminContainer>
  );
};

export default Product;
