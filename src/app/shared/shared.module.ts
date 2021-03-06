import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DurationPipe } from './duration.pipe';
import { ProviderPipe } from './provider.pipe';
import { RouterModule } from '@angular/router';
import { QueueTrackDirective } from './queue-track.directive';
import { FilterProviderComponent } from './filter-provider/filter-provider.component';
import { EditablePlaylistSelectionComponent } from './editable-playlist-selection/editable-playlist-selection.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        FlexLayoutModule,
        MatDialogModule,
        MatListModule,
    ],
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatMenuModule,
        FlexLayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
        DurationPipe,
        ProviderPipe,
        RouterModule,
        QueueTrackDirective,
        FilterProviderComponent,
    ],
    declarations: [
        DurationPipe,
        ProviderPipe,
        QueueTrackDirective,
        FilterProviderComponent,
        EditablePlaylistSelectionComponent,
    ],
})
export class SharedModule {}
