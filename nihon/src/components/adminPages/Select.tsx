"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { fetchCategories, fetchSuppliers } from "@/lib/supabase/admin/userClient-product";

type Option = {
  value: number;
  label: string;
};

export function SelectSupplier({ name, resetKey }: { name: string, resetKey: number }) {
  const [suppliers, setSuppliers] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const categories = await fetchSuppliers();

        const mapped = categories.map((c: any) => ({
          value: c.idfornecedor,
          label: c.nome,
        }));

        setSuppliers(mapped);
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    }

    load();
  }, []);

  useEffect(() => {
    setSelected(null);
  }, [resetKey]);

  return (
    <div className="w-full cursor-pointer">
      <Select
        options={suppliers}
        value={selected}
        placeholder=""
        instanceId="supplierSelect"
        className="w-full cursor-pointer"
        classNamePrefix="react-select"
        onChange={(v) => setSelected(v as Option)}
        styles={{
          container: (base) => ({
            ...base,
            cursor: "pointer",
          }),
          control: (base, state) => ({
            ...base,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            height: "2.5rem",
            minHeight: "2.5rem",
            width: "100%",
            borderRadius: "1.5rem",
            borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
            boxShadow: "none",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            "&:hover": {
              borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
            },
          }),
          valueContainer: (base) => ({
            ...base,
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "0.25rem",
            maxHeight: "100%",
            padding: "0",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
            cursor: "pointer",
          }),
          multiValue: (base) => ({
            ...base,
            borderRadius: "0.5rem",
            maxWidth: "100%",
            cursor: "pointer",
          }),
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            width: "1px",
            minWidth: 0,
            opacity: 0,
            cursor: "pointer",
          }),
          indicatorsContainer: (base) => ({
            ...base,
            cursor: "pointer",
          }),
        }}
      />
      <input type="hidden" name={name} value={selected?.value ?? ""} />
    </div>
  );
}

export function SelectCategory({ name, resetKey }: { name: string, resetKey: number }) {
  const [category, setCategory] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const categories = await fetchCategories();

        const mapped = categories.map((c: any) => ({
          value: c.idcategoria,
          label: c.nome,
        }));

        setCategory(mapped);
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    }

    load();
  }, []);

  useEffect(() => {
    setSelected([]);
  }, [resetKey]);

  return (
    <div className="w-full cursor-pointer">
      <Select
        options={category}
        value={selected}
        isMulti
        placeholder=""
        instanceId="categorySelect"
        className="w-full cursor-pointer"
        classNamePrefix="react-select"
        onChange={(v) => setSelected(v as Option[])}
        styles={{
          container: (base) => ({
            ...base,
            cursor: "pointer",
          }),
          control: (base, state) => ({
            ...base,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            height: "2.5rem",
            minHeight: "2.5rem",
            width: "100%",
            borderRadius: "1.5rem",
            borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
            boxShadow: "none",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            "&:hover": {
              borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
            },
          }),
          valueContainer: (base) => ({
            ...base,
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "0.25rem",
            maxHeight: "100%",
            padding: "0",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
            cursor: "pointer",
          }),
          multiValue: (base) => ({
            ...base,
            borderRadius: "0.5rem",
            maxWidth: "100%",
            cursor: "pointer",
          }),
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            width: "1px",
            minWidth: 0,
            opacity: 0,
            cursor: "pointer",
          }),
          indicatorsContainer: (base) => ({
            ...base,
            cursor: "pointer",
          }),
        }}
      />

      {selected.map((item, i) => (
        <input key={i} type="hidden" name={name} value={item.value} />
      ))}
    </div>
  );
}
