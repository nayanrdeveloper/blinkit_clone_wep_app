import { useEffect, useState } from "react";
import axios from "axios";

interface SubCategory {
  _id: string;
  name: string;
  image: string;
  category: string;
}

const useFetchSubCategory = () => {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchSubCategories();
  }, []);

  const fetchSubCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://blinkit.onrender.com/subcategories`);
      setSubCategories(response.data);
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchSubCategoryByCategory = async (subCategoryId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://blinkit.onrender.com/subcategories/${subCategoryId}`
      );
      return response.data;
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  return { subCategories, loading, error, fetchSubCategoryByCategory };
};

export default useFetchSubCategory;
