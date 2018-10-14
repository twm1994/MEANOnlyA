import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'First balabala...'},
  //   {title: 'Second Post', content: 'Second balabala...'},
  //   {title: 'Third Post', content: 'Third balabala...'},
  //   {title: 'Fourth Post', content: 'Fourth balabala...'},
  //   {title: 'Fifth Post', content: 'Fifth balabala...'}
  // ];
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;
  // postService: PostService;
  // constructor(postsService: PostService) {
  //   this.postService: PostService;
  // }
  constructor(public postService: PostService) {}
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
