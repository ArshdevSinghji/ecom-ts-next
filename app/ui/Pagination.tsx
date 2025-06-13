"use client";

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setPage } from "../redux/slice/pageSlice";

export default function PaginationRounded({ total }: { total: number }) {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.page.page);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(
      setPage({
        number: value - 1,
      })
    );
  };

  return (
    <Stack spacing={2} my={2}>
      <Pagination
        count={Math.ceil(total / 10)}
        page={currentPage + 1}
        variant="text"
        shape="rounded"
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
}
