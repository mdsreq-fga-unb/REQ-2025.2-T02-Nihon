"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { fetchSuppliers, fetchCategories } from '@/lib/supabase/admin/userClient-product';

type Option = {
  value: number;
  label: string;
};

type Fornecedor = {
  idfornecedor: number;
  nome: string;
}

type Categoria = {
  idcategoria: number;
  nome: string;
}

export function SelectSupplier({ name, supplier }: { name: string, supplier: Fornecedor }) {
  const [suppliers, setSuppliers] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option | null>(null);
  
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchSuppliers();
        const categories = data;
        const mapped = categories.map((c: Fornecedor) => ({
          value: c.idfornecedor,
          label: c.nome,
        }));

        setSuppliers(mapped);
        if (supplier) {
          const defaultOption = mapped.find(o => o.value === supplier.idfornecedor) ?? null;
          setSelected(defaultOption);
        }
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    };
    load();
  }, []);

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

export function SelectCategory({ name, categories }: { name: string, categories: Categoria[] }) {
  const [category, setCategory] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const fetchedCategories = await fetchCategories();

        const mapped = fetchedCategories.map((c: any) => ({
          value: c.idcategoria,
          label: c.nome,
        }));

        
        setCategory(mapped);
      
        if (categories && categories.length > 0) {
          const defaultSelected = categories
            .map(cat => mapped.find(o => o.value === cat.idcategoria))
            .filter(Boolean) as Option[];
          setSelected(defaultSelected);
        }
        
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    }

    load();
  }, []);


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

type StatusOption = {
  value: boolean;
  label: string;
};


export function SelectStatus({ name, initialState }: {name: string, initialState: boolean}) {
  const [options] = useState<StatusOption[]>([
    { value: true, label: "Ativo" },
    { value: false, label: "Inativo" },
  ]);

  const [selected, setSelected] = useState<StatusOption | null>(
    options.find(o => o.value === initialState) ?? null
  );


  return (
    <div className="w-full cursor-pointer">
      <Select
        options={options}
        value={selected}
        placeholder=""
        instanceId="statusSelect"
        className="w-full cursor-pointer"
        classNamePrefix="react-select"
        onChange={(v) => setSelected(v as StatusOption)}
        styles={{
          container: (base) => ({ ...base, cursor: "pointer" }),
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
            gap: "0.25rem",
            maxHeight: "100%",
            padding: "0",
            cursor: "pointer",
          }),
        }}
      />
      <input type="hidden" name={name} value={selected?.value ? "true" : "false"} />
    </div>
  );
}