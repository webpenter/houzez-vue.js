<template>
    <div id="property-availability-calendar-wrap" class="property-availability-calendar-wrap property-section-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap">
			<h2>Availability Calendar</h2>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">

			<div class="block-availability-calendars">
				<div class="search-calendar clearfix">

					<div class="calendar-arrow"></div>

					<div class="left-calendar">
						<div class="month clearfix">
							<div class="month-title">August <span>2019</span></div>
						</div>

						<ul class="weekdays clearfix">
							<li>M</li>
							<li>T</li>
							<li>W</li>
							<li>T</li>
							<li>F</li>
							<li>S</li>
							<li>S</li>
						</ul>

						<ul class="days clearfix">  
							<li class="prev-month">
								<!-- <span class="day-number">29</span> -->
							</li>
							<li class="prev-month">
								<!-- <span class="day-number">30</span> -->
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">1</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">2</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">3</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">4</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">5</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">6</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">7</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">8</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">9</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">10</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">11</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">12</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">13</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">14</span>
							</li>
							<li class="current-month day-available past-day">
								<span class="day-number">15</span>
							</li>
							<li class="current-month day-available current-day">
								<span class="day-number">16</span>
							</li>
							<li class="current-month day-unavailable">
								<span class="day-number">17</span>
							</li>
							<li class="current-month day-unavailable">
								<span class="day-number">18</span>
							</li>
							<li class="current-month day-unavailable">
								<span class="day-number">19</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">20</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">21</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">22</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">23</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">24</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">25</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">26</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">27</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">28</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">29</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">30</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">31</span>
							</li>
							<li class="next-month">
								<!-- <span class="day-number">1</span> -->
							</li>
							<li class="next-month">
								<!-- <span class="day-number">2</span> -->
							</li>
						</ul>
					</div><!-- left-calendar -->

					<div class="right-calendar">
						<div class="month clearfix">
							<div class="month-title">September <span>2019</span></div>
						</div>

						<ul class="weekdays clearfix">
							<li>M</li>
							<li>T</li>
							<li>W</li>
							<li>T</li>
							<li>F</li>
							<li>S</li>
							<li>S</li>
						</ul>

						<ul class="days clearfix">  
							<li class="prev-month">
								<!-- <span class="day-number">29</span> -->
							</li>
							<li class="prev-month">
								<!-- <span class="day-number">30</span> -->
							</li>
							<li class="current-month day-available">
								<span class="day-number">1</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">2</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">3</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">4</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">5</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">6</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">7</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">8</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">9</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">10</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">11</span>
							</li>
							<li class="current-month day-pending">
								<span class="day-number">12</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">13</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">14</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">15</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">16</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">17</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">18</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">19</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">20</span>
							</li>
							<li class="current-month day-booked">
								<span class="day-number">21</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">22</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">23</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">24</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">25</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">26</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">27</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">28</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">29</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">30</span>
							</li>
							<li class="current-month day-available">
								<span class="day-number">31</span>
							</li>
							<li class="next-month">
								<!-- <span class="day-number">1</span> -->
							</li>
							<li class="next-month">
								<!-- <span class="day-number">2</span> -->
							</li>
						</ul>
					</div><!-- right-calendar -->   

					<div class="availability-notes">
						<ul class="list-inline">
							<li class="list-inline-item day-available">
								<span>Available</span>
							</li>
							<li class="list-inline-item day-pending">
								<span>Pending</span>
							</li>
							<li class="list-inline-item day-booked">
								<span>Booked</span>
							</li>
						</ul>
					</div>

					<div class="calendar-navigation custom-actions">
						<button class="btn btn-action float-left btn-primary-outlined"><i class="houzez-icon icon-arrow-left-1"></i></button>
						<button class="btn btn-action float-right btn-primary-outlined"><i class="houzez-icon icon-arrow-right-1"></i></button>
					</div><!-- calendar-navigation -->

				</div>
			</div><!-- block-availability-calendars -->

		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-availability-calendar-wrap -->
</template>