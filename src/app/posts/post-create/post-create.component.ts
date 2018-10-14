// tslint:disable-next-line:quotemark
// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";

// import { Post } from "../post.model";
@Component({
  // tslint:disable-next-line:quotemark
  selector: 'app-post-create',
  // tslint:disable-next-line:quotemark
  templateUrl: './post-create.component.html',
  // tslint:disable-next-line:quotemark
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // newPost = '';
  // enteredTitle = '';
  // enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();
  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // alert('added');
  //   // console.log(postInput);
  //   this.newPost = postInput.Title;
  // }
  // onAddPost() {
  //   // this.newPost = this.enteredTitle;
  //   const post: Post = {
  //     title: this.enteredTitle,
  //     content: this.enteredContent
  //   };
  //   this.postCreated.emit(post);
  // }
  constructor(public postService: PostService) {}
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    // this.postCreated.emit(post);
    this.postService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }
}
