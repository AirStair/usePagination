import { usePagination } from "@/composables/usePagination";
import { ref } from "vue";
test("must work", () => {
  const total = ref(100);
  const limit = ref(20);
  const page = ref(2);
  const prev = ref(true);
  const pages = usePagination(total, limit, page, prev);
  expect(pages.value).toStrictEqual([1, 2, 3, 4, 5]);
});
