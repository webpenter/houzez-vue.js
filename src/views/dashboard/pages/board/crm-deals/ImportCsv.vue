<template>
    <DashboardHeader :heading="$t('Import')">
        <!-- <a class="btn btn-primary" href="#">Add New Deal</a> -->
    </DashboardHeader>

    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">

                    <div class="alert alert-success" role="alert">
                        {{$t("Settings saved successfully.")}}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="alert alert-danger" role="alert">
                        {{$t("Something went wrong.")}}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-sm-12">
                            <div class="dashboard-content-block">
                                <p>{{$t('This page allows you to easily import CSV files into our system. Follow these simple steps to seamlessly transfer your data:')}}</p>

                                <ol class="mb-0">
                                    <li><strong>{{$t('Prepare your CSV file:')}}</strong> {{$t('Ensure your file is correctly formatted with clear column headers and accurate data.')}}</li>
                                    <li><strong>{{$t('Upload your CSV file:')}}</strong> {{$t('Click the Choose File button to select your CSV file from your device.')}}</li>
                                </ol>

                            </div><!-- dashboard-content-block -->

                            <h2>{{$t('Previous Imported Files')}}</h2>
                            <table class="dashboard-table dashboard-table-file-import table-lined responsive-table">
                                <thead>
                                    <tr>
                                        <th>{{$t('File Name')}}</th>
                                        <th>{{$t('Import Date')}}</th>
                                        <th class="action-col">{{$t('Actions')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="File Name">{{$t('Import.csv')}}</td>
                                        <td data-label="Date">{{$t('June 9, 2019 - 6:46 pm')}}</td>
                                        <td class="property-table-actions" data-label="Actions">
                                            <div class="dropdown property-action-menu">
                                                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$t('Actions')}}</button>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">{{$t('Delete')}}</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                   
                                    <tr>
                                        <td data-label="File Name">{{$t('Import.csv')}}</td>
                                        <td data-label="Date">{{$t('June 9, 2019 - 6:46 pm')}}</td>
                                        <td class="property-table-actions" data-label="Actions">
                                            <div class="dropdown property-action-menu">
                                                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$t('Actions')}}</button>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">{{$t('Delete')}}</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table><!-- dashboard-table -->
                            
                        </div>
                        <div class="col-lg-4 col-sm-12">
                            <div class="dashboard-content-block">
                                <div class="input-group">
                                    <div class="custom-file custom-file-csv-upload">
                                        <input type="file">
                                        <label class="custom-file-label">{{$t('Choose file')}}</label>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-full-width" type="button" id="inputGroupFileAddon04">{{$t('Upload')}}</button>
                            </div><!-- dashboard-content-block -->
                        </div>
                    </div>

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>