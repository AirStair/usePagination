import { ref, watchEffect, unref, isRef } from "vue";

export const usePagination = (total, limit, page, prev) => {
  const pages = ref([]);
  const pull = () => {
    const sign = unref(prev) ? "-" : "";
    const pageCount = unref(total) / unref(limit);
    pages.value = Array(pageCount)
      .fill(0)
      .reduce((...args) => {
        const index = args?.[2];
        const prev = args?.[0];
        prev.push(pageCount - index);
        return prev;
      }, [])
      .reverse()
      .slice(Number(sign.concat(-unref(page))));
  };
  if (isRef(total) && isRef(limit) && isRef(page) && isRef(prev)) {
    watchEffect(pull);
  } else {
    pull();
  }
  return pages;
};
