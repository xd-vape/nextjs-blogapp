"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createBlogSchema } from "@/lib/zod/schema";
import { Textarea } from "../ui/textarea";
import { createPost } from "@/lib/action";
import { slugify } from "@/lib/utils";

import dynamic from "next/dynamic";
// import "react-markdown-editor-lite/lib/index.css"; // Nur wenn du react-markdown-editor-lite nutzt
import "@uiw/react-md-editor/markdown-editor.css"; // Für uiw/md-editor
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default function CreateForm() {
  const form = useForm({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
  });

  function onSubmit(values) {
    console.log(values);

    // console.log(slugify(values.title));

    createPost(undefined, values);
  }

  return (
    <div className="bg-white w-1/2 p-6 mt-25 rounded shadow z-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  {/* <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className=""
                    {...field}
                  /> */}
                  <div className="bg-white">
                    <MDEditor
                      value={field.value}
                      onChange={field.onChange}
                      preview="edit"
                      height={500}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Link</FormLabel>
                <FormControl>
                  <Input placeholder="image" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
