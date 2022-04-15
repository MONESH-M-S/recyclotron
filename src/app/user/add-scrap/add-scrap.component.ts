import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Scrap } from 'src/app/scrap.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-scrap',
  templateUrl: './add-scrap.component.html',
  styleUrls: ['./add-scrap.component.scss'],
})
export class AddScrapComponent implements OnInit {
  transportationOptions = ['Yes', 'No'];
  form: FormGroup;
  imageDisplay: any;
  id: string;
  currentDateTime: string;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this._initForm();
    this.route.params.subscribe((params) => {
      if (params) {
        this.id = params['id'];
      }
    });
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.isLoading = true;

    this.currentDateTime = this.datepipe.transform(
      new Date(),
      'dd/MM/yyyy h:mm'
    );

    if (this.form.invalid) return;

    const f = this.form.value;
    const scrapForm = new FormData();
    scrapForm.append('product', f.product),
      scrapForm.append('quantity', f.quantity),
      scrapForm.append('scrapProducedTime', f.scrapProducedTime),
      scrapForm.append('utilizableTime', f.utilizableTime),
      scrapForm.append('transportationAvailable', f.transportationOptions),
      scrapForm.append('location', f.location),
      scrapForm.append('scrapProcessingDescription', f.processParameter),
      scrapForm.append('image', f.image),
      scrapForm.append('createdAt', this.currentDateTime),
      scrapForm.append('creator', this.id),

      
      this.userService.addNewScrap(scrapForm).subscribe((res) => {
        if (res.scrap != null) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res.message,
          });
          window.setTimeout(() => {
            this.isLoading = false;
            this.router.navigate([`u/${this.id}`]);
          }, 3000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.message,
          });
          this.isLoading = false;
        }
      });
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      scrapProducedTime: ['', [Validators.required]],
      utilizableTime: ['', [Validators.required]],
      transportationOptions: ['', [Validators.required]],
      location: ['', [Validators.required]],
      processParameter: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
}
